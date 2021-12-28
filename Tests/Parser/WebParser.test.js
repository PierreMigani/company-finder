const WebParser = require('../../Parser/WebParser.js');
const mockAxios = require('axios');

jest.mock('axios')

// mock getUrlParams()
const mockGetUrlParams = jest.fn(() => {
    return {
        'q': 'search content',
    };
});

test('test successful parsing', () => {
    const parser = new WebParser('http://www.example.com', {
        info1: '#info1',
        info2: '#info2',
        info3: '#info3',
        info4: '#info4'
    });
    
    parser.getUrlParams = mockGetUrlParams;

    mockAxios.get.mockImplementation(() => Promise.resolve({
        status: 200,
        data: '<html><body><div id="info1">info content</div><div id="info3">info content 3</div></body></html>'
    }));

    return parser.parse({
        testSearchParam: 'search content'
    }).then(infos => {
        expect(infos).toEqual({
            info1: 'info content',
            info3: 'info content 3'
        });
    });
});

test('test not found info parsing', () => {
    const parser = new WebParser('http://www.example.com', {
        info1: '#info1'
    });

    // mock getUrlParams()
    const mockGetUrlParams = jest.fn(() => {
        return {
            'q': 'search content',
        };
    });
    
    parser.getUrlParams = mockGetUrlParams;

    mockAxios.get.mockImplementation(() => Promise.resolve({
        status: 200,
        data: '<html><body><div id="wrong-info">wrong info content</div></body></html>'
    }));

    return parser.parse({
      testSearchParam: 'search content'
    }).then(infos => {
        expect(infos).toEqual({});
    });
});

test('test error fetch parsing', () => {
  const parser = new WebParser('http://www.example.com', {
      info1: '#info1'
  });

  // mock getUrlParams()
  const mockGetUrlParams = jest.fn(() => {
      return {
          'q': 'search content',
      };
  });
  
  parser.getUrlParams = mockGetUrlParams;

  mockAxios.get.mockImplementation(() => Promise.resolve({
      status: 500,
  }));

  return parser.parse({
    testSearchParam: 'search content'
  }).then(infos => {
      expect(infos).toEqual(null);
  });
});
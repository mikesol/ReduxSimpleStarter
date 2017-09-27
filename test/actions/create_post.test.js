import { createPost } from '../../src/actions';
import { CREATE_POST } from '../../src/actions';
import { ROOT_URL } from '../../src/actions';
import { API_KEY } from '../../src/actions';
import promise from 'redux-promise';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mockStore = configureMockStore([promise])

describe('async actions', () => {

  it('should create post on a CREATE_POST request', () => {
    const mockPost = {
          title: 'foo',
          categories: 'bar',
          content: 'this is some content'
    };
    const mockResult = {
        "4": {
          id: 4,
          ...mockPost
        }
    };

    const mock = new MockAdapter(axios);
    mock.onPost(`${ROOT_URL}/posts${API_KEY}`, mockPost)
      .reply(200, mockResult);

    const expectedActions = [{
      type: CREATE_POST,
      payload: {data: mockResult}
    }];
    const store = mockStore({
      posts: {}
    });

    return store.dispatch(createPost(mockPost,(res)=>res)).then(() => {
      // return of async actions
      expect(store.getActions()[0].type).toEqual(expectedActions[0].type)
      expect(store.getActions()[0].payload.data).toEqual(expectedActions[0].payload.data)
      expect(store.getActions().length).toEqual(expectedActions.length)
    })
  })
})

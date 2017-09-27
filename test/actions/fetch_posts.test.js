import { fetchPosts } from '../../src/actions';
import { FETCH_POSTS } from '../../src/actions';
import { ROOT_URL } from '../../src/actions';
import { API_KEY } from '../../src/actions';
import promise from 'redux-promise';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mockStore = configureMockStore([promise])

describe('async actions', () => {

  it('should fetch posts on a FETCH_POSTS request', () => {
    const mockEntry = [
        {
          id: 4,
          title: 'foo',
          categories: 'bar',
          content: 'this is some content'
        },
        {
          id: 5,
          title: 'bar',
          categories: 'bar',
          content: 'this is some content'
        }
    ];

    const mock = new MockAdapter(axios);
    mock.onGet(`${ROOT_URL}/posts${API_KEY}`)
      .reply(200, mockEntry);

    const expectedActions = [{
      type: FETCH_POSTS,
      payload: {data: mockEntry}
    }];
    const store = mockStore({
      posts: {}
    });


    return store.dispatch(fetchPosts()).then(() => {
      // return of async actions
      expect(store.getActions()[0].type).toEqual(expectedActions[0].type)
      expect(store.getActions()[0].payload.data).toEqual(expectedActions[0].payload.data)
      expect(store.getActions().length).toEqual(expectedActions.length)
    })
  })
})

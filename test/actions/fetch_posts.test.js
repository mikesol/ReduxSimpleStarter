import { fetchPosts } from '../../src/actions';
import { FETCH_POSTS } from '../../src/actions';
import { ROOT_URL } from '../../src/actions';
import { API_KEY } from '../../src/actions';
import promise from 'redux-promise';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore([promise])

describe('async actions', () => {

  it('should fetch posts on a FETCH_POSTS request', () => {
    const mockEntry = {
      data: {
        4: {
          id: 4,
          title: 'foo',
          categories: 'bar',
          content: 'this is some content'
        }
      }
    };

    const mock = MockAdapter(axios);
    mock.onGet(`${ROOT_URL}/posts${API_KEY}`)
      .reply(200, mockEntry);

    const expectedActions = [{
      type: FETCH_POSTS,
      payload: mockEntry
    }]
    const store = mockStore({
      posts: {}
    })

    return store.dispatch(fetchPosts()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: "Hello", like: '3'},
        {id: 2, message: "My First Post", like: '0'}

    ]
}

it('length of post should be incremented', ()=>{
    // 1.test data
    let action = addPostActionCreator('test-test')

    // 2. action
    let newState = profileReducer(state,action)
    // 3. expectation
    expect (newState.posts.length).toBe(3)
})
it('message of new post should be correct', ()=>{
    // 1.test data
    let action = addPostActionCreator('test-test')
    // 2. action
    let newState = profileReducer(state,action)
    // 3. expectation
    expect (newState.posts[2].message).toBe('test-test')
})


it('after deleting length of messages should be decrement', ()=>{
    let action = deletePost(1);
    let newState = profileReducer(state,action)
    expect (newState.posts.length).toBe(1)
})
it('after deleting length  should not be decrement if id is incorrect', ()=>{
    let action = deletePost(1000);
    let newState = profileReducer(state,action)
    expect (newState.posts.length).toBe(2)
})

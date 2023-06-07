import React from 'react';
import ProfileStatus from "./ProfileStatus";
import {create} from "react-test-renderer"

describe("ProfileStatus component", ()=> {
    test("test from props should be in the state", ()=>{
        const component = create(<ProfileStatus status="hello" />)
        const instance =component.getInstance()
        expect(instance.state.status).toBe("hello")
    })

    test("after creation <span> should be display", ()=>{
        const component = create(<ProfileStatus status="hello" />)
        const root =component.root
        let span = root.findByType("span")
        expect(span).not.toBeNull()
    })
    test("after creation <span> should contains correct status", ()=>{
        const component = create(<ProfileStatus status="hello" />)
        const root =component.root
        let span = root.findByType("span")
        expect(span.children[0]).toBe("hello")
    })

    test("after creation <input> should not be displayed", ()=>{
        const component = create(<ProfileStatus status="hello" />)
        const root =component.root
        expect(()=>{
            let input = root.findByType("input")
        }).toThrow()
    })
    test("input should be displayed in editMode instead of span", ()=>{
        const component = create(<ProfileStatus status="hello" />)
        const root =component.root
        let span = root.findByType("span")
        span.props.onDoubleClick()
        let input = root.findByType("input")
        input.props.value
        expect(input.props.value).toBe("hello")
    })
    test("callback should be called", ()=>{
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status="hello" updateStatus={mockCallback}/>)
        let instance = component.getInstance()
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})
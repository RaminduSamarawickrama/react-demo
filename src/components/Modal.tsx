export function Modal(props,children) {
    return (
        <>
            <input type="text" placeholder='name' onChange={(e) => props.setName(e.target.value)}/>
            <input type="text" placeholder='email' onChange={(e) => props.setEmail(e.target.value)}/>
            <input type="text" placeholder='phone' onChange={(e) => props.setPhone(e.target.value)}/>

            <br/>
            <button onClick={props.handleSubmit}>{props.children}</button>
        </>
    );
}
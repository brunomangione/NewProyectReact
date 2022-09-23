import React from 'react';

const Form = () => {
    return (
        <>
            <form class="d-flex">
                    <input class="form-control me-sm-2" type="text" placeholder="Products"></input>
                    <button class="btn btn-secondary my-2 my-sm-0" type="submit"> Search </button>
                </form>
        </>
    );
}

export default Form;

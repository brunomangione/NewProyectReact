import React from 'react';

const Dropdown = () => {
    return (
        <>
            <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Fragancias</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Fragancias Hombres</a>
                            <a class="dropdown-item" href="#">Fragancias Mujeres</a>
                            
                        </div>
                    </li>
            
        </>
    );
}

export default Dropdown;

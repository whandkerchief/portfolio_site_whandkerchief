import React from 'react';
import { NavLink } from 'react-router-dom';

export default function BottomText() {
    return (
        <div className="bottom-right-text">
            <NavLink
                to="/about"
            >
                <a href="#">W. Hannah</a>
            </NavLink>
        </div>
    );
  }
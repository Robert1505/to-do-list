import React from 'react';
import {Link} from 'react-router-dom';

export default function Button() {
    return (
        <div className = "text-center mt-16">
            <Link to = "/goals">
                <button className = "ml-4 py-2 px-4 bg-red-600 text-white rounded hover:bg-red-500 border-2 border-black font-bold">
                    Do it!
                </button>
            </Link>
        </div>
    )
}

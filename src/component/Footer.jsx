import React from 'react';

function Footer(props) {
    return (
        <footer className="border-t border-sky-100 bg-sky-50 px-6 py-8 text-center text-sky-700">
            <h2 className="text-lg font-semibold text-sky-600">Footer</h2>
            <div className="mt-2 space-y-1 text-sm">
                <p>문의처: email@example.com</p>
                <p>주소: korea/seoul</p>
            </div>
        </footer>
    );
}

export default Footer;

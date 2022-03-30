import React from "react";

const year = new Date();
const dynamicYear = year.getFullYear();

export default function Footer(){
    return(
        <footer className="footer">
            <p>Copyrights &copy; {dynamicYear}</p>
        </footer>
    );
}
import React, { useState } from 'react';
import './Home.css'
export default function Home() {

    const [numbers] = useState([
        {
            title: "",
            numbers: 50,
            span: "Years of Experience"
        },
        {
            title: "",
            numbers: 50,
            span: "Years of Experience"
        },
        {
            title: "",
            numbers: 50,
            span: "Years of Experience"
        },
        {
            title: "",
            numbers: 50,
            span: "Years of Experience"
        }
    ])


    const Experience = numbers.map((e, i) => {
        return (
            <div key={i} class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                <div class="block-18 p-3">
                    <div class="text">
                        <div class="icon d-flex justify-content-center align-items-center">
                            <h3>Innovative and Reliable</h3>
                        </div>
                        <div class="icon d-flex justify-content-center align-items-center">
                            <span>
                                We help you with virtual financial solutions
                            </span>
                        </div>
                        <strong class="number" data-number="50">50</strong>
                        <span>Years of Experienced</span>
                    </div>
                </div>
            </div>
        )
    })


    return (
        <>
            <section className="masthead" role="img" aria-label="Image Description">
                <h1>The Hero Generator  </h1>
                <button>When a hero comes along</button>
            </section>
            <section className="container">
                <div class="row no-gutters d-md-flex align-items-center align-items-stretch">
                    {Experience}
                </div>
            </section>
        </>
    );
}



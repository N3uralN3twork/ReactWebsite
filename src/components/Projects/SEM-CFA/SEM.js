import React from 'react';
import ReactDOM from 'react-dom';
import JupyterViewer from 'react-jupyter-notebook';
import 

const SEMProjectPage = () => {
    return (
        <div className="home-section">
            <div className="blog-card">
                <div className="blog-card-view" style={{ width: '40%' }}>
                    <h2>GOAL</h2>
                    <p>Learn how to create and interpret structural equation models using R's lavaan.</p>
                </div>
                <div className="blog-card-view" style={{ width: '10%' }}>
                    {/* empty column to create gap */}
                </div>
                <div className="blog-card-view" style={{ width: '40%' }}>
                    <h2>RESULT</h2>
                    <p><strong>WiP</strong></p>
                </div>
            </div>
            <p>
                Structural Equation Models (SEM) help to model the dependence relationships among multiple variables, simultaneously. In other words, we can model not only multiple variables, but each of those dependent variables can have multiple covariates attached to them.
            </p>
            <h3>Software</h3>
            <p>
                There are a plethora of options available to create SEMs. Here are just a few of them:
            </p>
            <ol>
                <li><a href="https://lavaan.ugent.be/">lavaan</a></li>
                <li><a href="https://www.statmodel.com/">MPlus</a></li>
                <li><a href="https://documentation.sas.com/doc/en/statug/15.2/statug_calis_overview09.htm">SAS</a></li>
                <li><a href="https://www.stata.com/features/structural-equation-modeling/">Stata</a></li>
            </ol>
            <p>
                This project will use the <strong>lavaan</strong> library. If you don't have it installed, simply run the following command in your IDE of choice:
            </p>
            <code>
                npm install lavaan
            </code>
        </div>
    );
};

export default SEMProjectPage;

class Documentation extends React.Component {
    render() {
        return (
            <div className="ribbon l-box-lrg pure-g">
                <div className="l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5">
                    <img width="300" alt="File Icons" className="pure-img-responsive" src="file-icons.png" />
                </div>
                <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">
                    <h2 className="content-head content-head-ribbon">Documentation</h2>
                    <p className="docs">
                        Checkout the latest documentation at <a className="pure-color-white" href="http://www.asset-pipeline.com/manual">http://www.asset-pipeline.com/manual</a>
                    </p>
                </div>
            </div>
        )
    }
}
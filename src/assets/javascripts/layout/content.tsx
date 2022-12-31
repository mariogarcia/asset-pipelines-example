class Content extends React.Component {
   render() {
      return (
        <div className="content">
            <h2 className="content-head is-center">What is Asset Pipelines ?</h2>
            <div className="pure-g">
                <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
                    <h3 className="content-subhead">
                        <i className="fa fa-rocket"></i>
                        Static/No Static management
                    </h3>
                    <p>
                        The asset-pipeline provides first class static and 'not so static' asset management for
                        the JVM including many native framework integrations
                    </p>
                </div>
                <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
                    <h3 className="content-subhead">
                        <i className="fa fa-mobile"></i>
                        Extensible
                    </h3>
                    <p>
                        It is highly extensible and provides processing of dynamic languages like
                        LESS, SASS, Coffee, Typescript, and more.
                    </p>
                </div>
                <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
                    <h3 className="content-subhead">
                        <i className="fa fa-th-large"></i>
                        Asset packaging and Beyond
                    </h3>
                    <p>
                        This goes beyond simple asset packaging and processing (making tools like grunt or webpack
                        unnecessary for building high quality single page apps on the JVM), but also takes it a
                        step further by providing features for optimally serving assets from your application as
                        well
                    </p>
                </div>
            </div>
        </div>
      )
   }
}
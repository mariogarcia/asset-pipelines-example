# Assets-Pipeline Example

## Goal

The objective of this project is to evaluate and contribute to the assets-pipeline and related projects.

## Versions

- jdk11
- gradle 6.5 (wrapper)
- Assets-Pipeline 4.0.0

## How to generate site

To generate the site make sure you have JDK11 installed. Then you can generate the site by executing:

```
./gradlew assetClean assetCompile
```

Then open `build/index.html` with your browser to see the result.

## TODOs
 
- I need to figure out whether is possible or not to use ES6 imports instead of assets-pipelines requires
- Look for an example about using webjars
- Report GrooCSS extension module methods for measurements not working
# AEM Admin Interface Generator

This is a cli that generates a skeleton Admin UI into an existing AEM codebase. 
It follows the concepts outlined in [this blog post](https://blogs.perficient.com/2020/04/13/building-aem-admin-consoles-that-will-not-break-with-new-aem-releases/) and adds [coral-spectrum](https://github.com/adobe/coral-spectrum) as a dependency.

## Installation
```sh
npm install -g aem-admin-interface-generator
```

## Usage
`cd` to an AEM project, under /apps directory, run:

```sh
aemag admin new
```

Answer the simple prompts, and voila! You now have an admin interface in your project!
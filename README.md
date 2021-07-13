# ckeditor5-build

A editor build for CKEditor 5 v29.0.0 with [@aeness/ckeditor5-insert-image](https://github.com/Aeness/ckeditor5-insert-image).

![Example](https://github.com/Aeness/ckeditor5-build/blob/v29.0.0/docs/doc-example1.jpg?raw=true)

## Test it

Run (or [download it](https://github.com/Aeness/ckeditor5-build/archive/refs/tags/v29.0.0.zip))
```
git clone --branch v29.0.0 https://github.com/Aeness/ckeditor5-build.git
```

 and open ckeditor5-build\sample\index.html in a browser for a french exemple or ckeditor5-build\sample\index_en.html for an english exemple.

## Dev - Common error

After build the new editor the following error appears :
```
Uncaught CKEditorError: ckeditor-duplicated-modules: Some CKEditor 5 modules are duplicated.
```

Aeness/ckeditor5-build does not confuse an editor build with an editor implementation.
They is not conflicting version of dependencies.

The error appends when npm create sub node_module in \node_module\@ckeditor\\* directories, when packages were duplicated in node_modules.

https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/error-codes.html#error-ckeditor-duplicated-modules :
> We recommend checking if any of the steps listed below help:
>
> rm -rf node_modules && npm install to make sure you have a clean node_modules/ directory. This step is known to help in most cases.
>
>If you use yarn.lock or package-lock.json, remove it before npm install.
Check whether all CKEditor 5 packages are up to date and reinstall them if you changed anything (rm -rf node_modules && npm install). [...]

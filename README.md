Introduction
------------

This plugin shows the download statistics for a PyPI package. It may be used
with many packages on the same webpage.


Usage
-----

Place DIVs where the stat boxes should go. They may have any styling you 
desire:

    <div id="pypi-display-pysecure" data-package="pysecure"></div>
    <div id="pypi-display-pytzpure" data-package="pytzpure"></div>

Invoke the "pypi" plugin on them:

    $("#pypi-display-pysecure").pypi()
    $("#pypi-display-pytzpure").pypi()

It'll look like:

![alt text](https://github.com/dsoprea/PypiStats/raw/master/src/common/images/icon48.png "Example Stats Output")


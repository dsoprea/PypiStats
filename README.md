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

![alt text](https://github.com/dsoprea/PypiStats/raw/master/index.png "Example Stats Output")

This image comes from the included index.html file. Though I've added styling 
to wrap the two boxes with a black border, the boxes themselves have the 
default styling.

Thanks to the Python website team for providing the running download counts.


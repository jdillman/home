#!/bin/bash

yarn build
aws s3 sync build/ s3://jonathandillman.com --acl public-read
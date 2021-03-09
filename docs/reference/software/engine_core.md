---
sidebar_label: engine (core)
title: Hamlet Deploy Engine (Core)
---
import Admonition from 'react-admonitions';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Engine Core is a Java-based binary built upon the [Apache Freemarker](https://freemarker.apache.org) template language.

## Configuration

The Engine Core requires the following Environment Variable(s)

| Variable                	| Value                                                                                                        	|
|-------------------------	|--------------------------------------------------------------------------------------------------------------	|
| GENERATION_ENGINE_DIR   	| A fully qualified filepath to a local copy of the Hamlet Deploy Engine Core repository.                      	|
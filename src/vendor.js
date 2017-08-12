/* eslint-disable no-unused-vars */

import React        from "react"
import ReactDOM     from "react-dom"
import { Provider } from "react-redux"

import {
  bindActionCreators,
  combineReducers,
  createStore,
  applyMiddleware,
} from "redux"

import { AppContainer }         from "react-hot-loader"
import { BrowserRouter, Route } from "react-router-dom"

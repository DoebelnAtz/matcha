import React from "react";
import { getLocal } from "../../Utils";
import {createCtx} from "../index";

const [ctx, Provider] = createCtx(getLocal("auth"));


export const AuthContext = ctx;
export const AuthContextProvider = Provider;

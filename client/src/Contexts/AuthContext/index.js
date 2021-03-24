import React from "react";
import { getLocalAuth } from "../../Utils";
import { createCtx } from "../index";

const [ctx, Provider] = createCtx(getLocalAuth());

export const AuthContext = ctx;
export const AuthContextProvider = Provider;

import { Conditions as TConditions } from './conditions'
import { UtilityConfig } from './css-utility'
import { Dict, RequiredBy } from './helper'
import type { CssProperty, Keyframes } from './panda-csstype'
import { Recipe } from './recipe'
import type { DotPath, Loose, TDotPath } from './shared'

type TBreakpoints = {
  [breakpoint: string]: string
}

export type TTokens = {
  [key: string]: string | TTokens
}

export type SemanticTokens<Tokens extends TDotPath = Dict, Conditions = Dict, Breakpoints = Dict> = {
  [K in keyof Tokens]?: {
    [token: string]: {
      [P in keyof Conditions | keyof Breakpoints | '_' | 'base']?: DotPath<Tokens>
    }
  }
}

type TokensMap<Tokens> = {
  [K in keyof Tokens]?: Array<CssProperty | Loose>
}

type Shorthands = {
  [shorthand: string]: Array<CssProperty>
}

export type Config<
  Conditions extends TConditions = TConditions,
  Breakpoints extends TBreakpoints = TBreakpoints,
  Tokens extends TTokens = TTokens,
> = {
  cwd?: string
  hash?: boolean
  clean?: boolean
  outdir?: string
  prefix?: string
  incremental?: boolean
  content?: string[]
  ignore?: string[]
  watch?: boolean
  conditions?: TConditions
  breakpoints?: Breakpoints
  keyframes?: Keyframes
  tokens?: Tokens
  tokensMap?: TokensMap<Tokens>
  semanticTokens?: SemanticTokens<Tokens, Conditions, Breakpoints>
  shorthands?: Shorthands
  utilities?: UtilityConfig<Tokens>[]
  recipes?: Recipe[]
}

export type TConfig = Config<TConditions, TBreakpoints, TTokens>

export function defineConfig<Conditions extends TConditions, Breakpoints extends TBreakpoints, Tokens extends TTokens>(
  config: Partial<Config<Conditions, Breakpoints, Tokens>>,
): Partial<Config<Conditions, Breakpoints, Tokens>> {
  return config
}

export type UserConfig = RequiredBy<Config, 'outdir' | 'cwd' | 'content'>

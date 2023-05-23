import { bannerRecipe } from './banner.recipe'
import { breadcrumbRecipe } from './breadcrumb.recipe'
import { calloutRecipe } from './callout.recipe'
import { cardRecipe } from './card.recipe'
import { navLinksRecipe } from './nav-links.recipe'
import { navbarRecipe } from './navbar.recipe'
import { tabsRecipe } from './tabs.recipe'
import { codeTabsRecipe } from './code-tabs.recipe'
import { buttonRecipe } from './button.recipe'
import { inputRecipe } from './input.recipe'

export const recipes = {
  button: buttonRecipe,
  banner: bannerRecipe,
  codeTabs: codeTabsRecipe,
  breadcrumb: breadcrumbRecipe,
  card: cardRecipe,
  callout: calloutRecipe,
  input: inputRecipe,
  navbar: navbarRecipe,
  navLinks: navLinksRecipe,
  tabs: tabsRecipe
}
import { actions } from "@/data/actions";
import { association } from "@/data/association";
import { contact } from "@/data/contact";
import { gallery } from "@/data/gallery";
import { navigation } from "@/data/navigation";
import { partners } from "@/data/partners";
import { statCategories, stats } from "@/data/stats";
import { team } from "@/data/team";
import { testimonials } from "@/data/testimonials";

export function getSiteMeta() {
  return {
    name: association.name,
    description: association.description
  };
}

export function getNavigationItems() {
  return navigation;
}

export function getAssociationOverview() {
  return association;
}

export function getHomepageSections() {
  return association.homepage;
}

export function getMissionVisionValues() {
  return {
    mission: association.mission,
    vision: association.vision,
    values: association.values,
    valueHighlights: association.values.map((value) => ({
      name: value,
      description:
        value === "Tameghrabit"
          ? "Une manière d’agir enracinée dans le contexte marocain, proche des réalités locales et tournée vers l’utilité collective."
          : value === "Orientation"
            ? "La volonté d’éclairer les choix, de structurer les parcours et d’aider les jeunes à mieux se projeter."
            : "La conviction que l’éducation reste un levier central de confiance, d’émancipation et d’impact."
    }))
  };
}

export function getStats() {
  return stats;
}

export function getStatCategories() {
  return statCategories;
}

export function getActionsPreview() {
  return actions;
}

export function getTeam() {
  return team;
}

export function getContactDetails() {
  return contact;
}

export function getPartners() {
  return partners;
}

export function getGallery() {
  return gallery;
}

export function getTestimonials() {
  return testimonials;
}

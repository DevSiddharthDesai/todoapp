import { library, IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faLink, faPowerOff, faUser } from "@fortawesome/free-solid-svg-icons";

function initFontAwesome(): void {
  library.add(faLink as IconDefinition);
  library.add(faUser as IconDefinition);
  library.add(faPowerOff as IconDefinition);
}

export default initFontAwesome;

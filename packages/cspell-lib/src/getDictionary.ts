import type { CSpellUserSettings } from '@cspell/cspell-types';

import { toInternalSettings } from './Settings/CSpellSettingsServer';
import type { SpellingDictionaryCollection } from './SpellingDictionary';
import { getDictionaryInternal } from './SpellingDictionary';

/**
 * Load a dictionary collection defined by the settings.
 * @param settings - that defines the dictionaries and the ones to load.
 * @returns a dictionary collection that represents all the enabled dictionaries.
 */
export function getDictionary(settings: CSpellUserSettings): Promise<SpellingDictionaryCollection> {
    return getDictionaryInternal(toInternalSettings(settings));
}

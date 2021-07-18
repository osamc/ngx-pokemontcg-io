/*
 * Public API Surface of ngx-ptcg-io
 */
export * from './lib/ngx-pokemontcg-io.module';

export * from './lib/models/card/Card'

export * from './lib/models/card/components/Ability';
export * from './lib/models/card/components/Attack';
export * from './lib/models/card/components/CardArt';
export * from './lib/models/card/components/Price';
export * from './lib/models/card/components/TcgPlayer';
export * from './lib/models/card/components/Weakness';

export * from './lib/models/common/Legalities';

export * from './lib/models/search/Filter';
export * from './lib/models/search/OrderBy';
export * from './lib/models/search/PageConfig';

export * from './lib/models/search/properties/BaseProperty';
export * from './lib/models/search/properties/MultiValueProperty';
export * from './lib/models/search/properties/RangeProperty';
export * from './lib/models/search/properties/SingleValueProperty';

export * from './lib/models/set/Images';
export * from './lib/models/set/Set';

export {PokemontcgIoService} from './lib/services/pokemontcg-io.service'

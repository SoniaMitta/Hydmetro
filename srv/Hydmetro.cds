using {com.satinfotech.Hydmetro as metro} from '../db/schema';



service hydmetro @(requires: 'authenticated-user') {
    entity train @(restrict: [ 
    { grant: ['READ'], to: 'HydmetroRead' },
    { grant: ['WRITE'], to: 'HydmetroWrite'},
    { grant: ['DELETE'], to: 'HydmetroDelete'},
  ]) as projection on metro.train
}

annotate hydmetro.train with @odata.draft.enabled;
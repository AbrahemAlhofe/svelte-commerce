CREATE MIGRATION m1uyz2ldtinx3xjbtpk6z3mh2a7ndq2jlx44sfn4ry3iw3rukbb5ma
    ONTO m156dodw7usfr2qe4nevoraiyavlpfguyvyyrv5r4itja547tybmla
{
  ALTER TYPE default::Category {
      DROP PROPERTY test;
  };
};

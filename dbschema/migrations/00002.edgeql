CREATE MIGRATION m156dodw7usfr2qe4nevoraiyavlpfguyvyyrv5r4itja547tybmla
    ONTO m1ihz4c32rvruqbgq7a63gh6al5wxxugzwdey6bygsvlxtefdv7zpq
{
  ALTER TYPE default::Category {
      CREATE PROPERTY test -> tuple<array<std::str>>;
  };
};

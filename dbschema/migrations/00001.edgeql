CREATE MIGRATION m1ihz4c32rvruqbgq7a63gh6al5wxxugzwdey6bygsvlxtefdv7zpq
    ONTO initial
{
  CREATE TYPE default::Category {
      CREATE REQUIRED PROPERTY name -> std::str;
      CREATE REQUIRED PROPERTY properties -> std::json;
  };
  CREATE TYPE default::Product {
      CREATE LINK category -> default::Category;
      CREATE REQUIRED PROPERTY description -> std::str;
      CREATE REQUIRED PROPERTY name -> std::str;
      CREATE REQUIRED PROPERTY price -> std::int64;
      CREATE REQUIRED PROPERTY properties -> std::json;
      CREATE REQUIRED PROPERTY thumbnail -> std::str;
  };
};

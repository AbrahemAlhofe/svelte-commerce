module default {

    type Category {
        required property name -> str;
        required property properties -> json;
    }

    type Product {
        required property name -> str;
        required property thumbnail -> str;
        required property description -> str;
        required property price -> int64;
        required property properties -> json;
        link category -> Category;
    }

};
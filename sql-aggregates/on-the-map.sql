select count("cities"."cityId"),
"countries"."name"
from "countries"
join "cities" using ("countryId")
group by "countryId";

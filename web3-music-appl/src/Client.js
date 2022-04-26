import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "88ktahmh", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  token: "sk6DEyP6Boqmjin2RC2BKp9mKdRGZJa1Jak9LJRLSb05vS5luwKj41au5AWLGiAlJoCOI7ZBEqra7v6K7Gpmk9fjEs0jxf1H4wff32vIIHcKGAdMEAV7QivfrNvKJhDPFYvL1qI4hmutJpPvpCKZL07ELiW4LLTWaTXoJ22OaDyrZnXc2sHZ"
});
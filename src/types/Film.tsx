export type Cover = {
    url: string;
    previewUrl: string;
};

export type Film = {
    id: string;
    slug: string;
    moviesCount: number;
    cover: Cover;
    name: string;
    updatedAt: string;
    createdAt: string;
};


/*
id
externalid
name
enname
alternativename
names
description
shortdescription
slogan
type
typenumber
isseries

status
year
releaseyears
rating

ratingmpaa
agerating
votes
seasonsinfo
budget
audience

movielength
serieslength
totalserieslength
*/
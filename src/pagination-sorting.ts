import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationSorting = async () => {
    //offset pagination
    // const offsetData = await prisma.post.findMany({
    //     skip: 5,
    //     take: 2
    // });
    // console.log('Offset paginated data:', offsetData)


    // cursor based pagination
    // cursor er maddhome bole dete pare koto number er por theke data khuja start korbe. as a result, data skip korbe r sob data khujbe nah, tai data find korte kom time lagbe. 
    // aikhane id: 90 theke find kora start korbe. tai 1-89 data find korbe nah, tai time beche gese
    const cursorData = await prisma.post.findMany({
        skip: 5,
        take: 2,
        cursor: {
            id: 90
        }
    })
    // console.log("cursor based paginated data:", cursorData)


    // sorting
    const sortedData = await prisma.post.findMany({
        orderBy: {
            // title: "asc"
            // title: "desc"
            id: "desc"
        },
        where: {
            title: "Title 1"
        }
    })
    console.log("sorted data:", sortedData)
}

paginationSorting();
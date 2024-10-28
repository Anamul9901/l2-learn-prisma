import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    // create a data
    // const result = await prisma.post.create({
    //     data: {
    //         title: "This is title 2!",
    //         content: "This is content...2",
    //         authorName: "Anamul Haque"
    //     }
    // })

    // console.log(result);


    const createMany = await prisma.post.createMany({
        data: [
            { "title": "Title 1", "content": "Content 1", "authorName": "Author 1" },
            { "title": "Title 2", "content": "Content 2", "authorName": "Author 2" },
            { "title": "Title 3", "content": "Content 3", "authorName": "Author 3" },
            { "title": "Title 4", "content": "Content 4", "authorName": "Author 4" },
            { "title": "Title 5", "content": "Content 5", "authorName": "Author 5" },
            { "title": "Title 6", "content": "Content 6", "authorName": "Author 6" },
            { "title": "Title 7", "content": "Content 7", "authorName": "Author 7" },
            { "title": "Title 8", "content": "Content 8", "authorName": "Author 8" },
            { "title": "Title 9", "content": "Content 9", "authorName": "Author 9" },
            { "title": "Title 10", "content": "Content 10", "authorName": "Author 10" },
            { "title": "Title 11", "content": "Content 11", "authorName": "Author 11" },
            { "title": "Title 12", "content": "Content 12", "authorName": "Author 12" },
            { "title": "Title 13", "content": "Content 13", "authorName": "Author 13" },
            { "title": "Title 14", "content": "Content 14", "authorName": "Author 14" },
            { "title": "Title 15", "content": "Content 15", "authorName": "Author 15" },
            { "title": "Title 16", "content": "Content 16", "authorName": "Author 16" },
            { "title": "Title 17", "content": "Content 17", "authorName": "Author 17" },
            { "title": "Title 18", "content": "Content 18", "authorName": "Author 18" },
            { "title": "Title 19", "content": "Content 19", "authorName": "Author 19" },
            { "title": "Title 20", "content": "Content 20", "authorName": "Author 20" },
            { "title": "Title 21", "content": "Content 21", "authorName": "Author 21" },
            { "title": "Title 22", "content": "Content 22", "authorName": "Author 22" },
            { "title": "Title 23", "content": "Content 23", "authorName": "Author 23" },
            { "title": "Title 24", "content": "Content 24", "authorName": "Author 24" },
            { "title": "Title 25", "content": "Content 25", "authorName": "Author 25" },
            { "title": "Title 26", "content": "Content 26", "authorName": "Author 26" },
            { "title": "Title 27", "content": "Content 27", "authorName": "Author 27" },
            { "title": "Title 28", "content": "Content 28", "authorName": "Author 28" },
            { "title": "Title 29", "content": "Content 29", "authorName": "Author 29" },
            { "title": "Title 30", "content": "Content 30", "authorName": "Author 30" },
            { "title": "Title 31", "content": "Content 31", "authorName": "Author 31" },
            { "title": "Title 32", "content": "Content 32", "authorName": "Author 32" },
            { "title": "Title 33", "content": "Content 33", "authorName": "Author 33" },
            { "title": "Title 34", "content": "Content 34", "authorName": "Author 34" },
            { "title": "Title 35", "content": "Content 35", "authorName": "Author 35" },
            { "title": "Title 36", "content": "Content 36", "authorName": "Author 36" },
            { "title": "Title 37", "content": "Content 37", "authorName": "Author 37" },
            { "title": "Title 38", "content": "Content 38", "authorName": "Author 38" },
            { "title": "Title 39", "content": "Content 39", "authorName": "Author 39" },
            { "title": "Title 40", "content": "Content 40", "authorName": "Author 40" },
            { "title": "Title 41", "content": "Content 41", "authorName": "Author 41" },
            { "title": "Title 42", "content": "Content 42", "authorName": "Author 42" },
            { "title": "Title 43", "content": "Content 43", "authorName": "Author 43" },
            { "title": "Title 44", "content": "Content 44", "authorName": "Author 44" },
            { "title": "Title 45", "content": "Content 45", "authorName": "Author 45" },
            { "title": "Title 46", "content": "Content 46", "authorName": "Author 46" },
            { "title": "Title 47", "content": "Content 47", "authorName": "Author 47" },
            { "title": "Title 48", "content": "Content 48", "authorName": "Author 48" },
            { "title": "Title 49", "content": "Content 49", "authorName": "Author 49" },
            { "title": "Title 50", "content": "Content 50", "authorName": "Author 50" },
            { "title": "Title 51", "content": "Content 51", "authorName": "Author 51" },
            { "title": "Title 52", "content": "Content 52", "authorName": "Author 52" },
            { "title": "Title 53", "content": "Content 53", "authorName": "Author 53" },
            { "title": "Title 54", "content": "Content 54", "authorName": "Author 54" },
            { "title": "Title 55", "content": "Content 55", "authorName": "Author 55" },
            { "title": "Title 56", "content": "Content 56", "authorName": "Author 56" },
            { "title": "Title 57", "content": "Content 57", "authorName": "Author 57" },
            { "title": "Title 58", "content": "Content 58", "authorName": "Author 58" },
            { "title": "Title 59", "content": "Content 59", "authorName": "Author 59" },
            { "title": "Title 60", "content": "Content 60", "authorName": "Author 60" },
            { "title": "Title 61", "content": "Content 61", "authorName": "Author 61" },
            { "title": "Title 62", "content": "Content 62", "authorName": "Author 62" },
            { "title": "Title 63", "content": "Content 63", "authorName": "Author 63" },
            { "title": "Title 64", "content": "Content 64", "authorName": "Author 64" },
            { "title": "Title 65", "content": "Content 65", "authorName": "Author 65" },
            { "title": "Title 66", "content": "Content 66", "authorName": "Author 66" },
            { "title": "Title 67", "content": "Content 67", "authorName": "Author 67" },
            { "title": "Title 68", "content": "Content 68", "authorName": "Author 68" },
            { "title": "Title 69", "content": "Content 69", "authorName": "Author 69" },
            { "title": "Title 70", "content": "Content 70", "authorName": "Author 70" },
            { "title": "Title 71", "content": "Content 71", "authorName": "Author 71" },
            { "title": "Title 72", "content": "Content 72", "authorName": "Author 72" },
            { "title": "Title 73", "content": "Content 73", "authorName": "Author 73" },
            { "title": "Title 74", "content": "Content 74", "authorName": "Author 74" },
            { "title": "Title 75", "content": "Content 75", "authorName": "Author 75" },
            { "title": "Title 76", "content": "Content 76", "authorName": "Author 76" },
            { "title": "Title 77", "content": "Content 77", "authorName": "Author 77" },
            { "title": "Title 78", "content": "Content 78", "authorName": "Author" }

        ]
    })

    console.log(createMany);
}

main();
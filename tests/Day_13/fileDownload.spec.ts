import { test,expect } from "@playwright/test";

test(`File Download`,async ({page}) => {
    
    await page.goto(`https://leafground.com/file.xhtml`);

    const filePromise = page.waitForEvent('download')

    await page.getByText(`Download`,{exact:true}).click();

    const fDown = await filePromise

    //Option1 - Relative

   // await fDown.saveAs("Data/JulyPW.png");

   await fDown.saveAs(`Data/${fDown.suggestedFilename()}`); // suggestedFilename() == Actual filename


    //Option3 - Download to D drive of your system

//    await fDown.saveAs("D:\\MarchPW.png");

const fileName = fDown.suggestedFilename();

expect(fileName).toBe('TestLeaf Logo.png');

})


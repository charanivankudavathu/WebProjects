(async () => {
    const chalkModule = await import("chalk");
    const chalk = chalkModule.default;

    console.log(chalk.bold("Node.js npm Package Demo"));
    console.log(chalk.green("Package installed successfully."));
    console.log(chalk.blue("This message uses the chalk package."));
})();
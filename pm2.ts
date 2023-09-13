import pm2 from "pm2";

pm2.start(
    {
        script: `node`,
        args: "myScript.js",
        name: "testing"
    },
    (err, apps) => {
        if (err) {
            console.log(err);
        } else {
            console.log("running");
        }
    }
);
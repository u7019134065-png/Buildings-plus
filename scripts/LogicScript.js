const currentVersion = "1.0"; // берем из mod.hjson
const url = "https://raw.githubusercontent.com/u7019134065/Buildings-plus/main/release.json";

http.get(url, result => {
    const data = JSON.parse(result);
    if(data.version !== currentVersion){
        ui.showInfo(
            Обновление мода!,
            Доступна версия: ${data.version}\n\n${data.description}
        );
    }
});

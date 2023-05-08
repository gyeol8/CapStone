//회사 부여 번호에 적용 되어 숫자별 팀 적용용
window.onload = function () {
    var companyNumberInput = document.getElementsByName("companyNumber")[0];
    companyNumberInput.setAttribute("min", "1");
    companyNumberInput.setAttribute("max", "100");
    companyNumberInput.setAttribute("step", "1");

    var teamSelect = document.getElementById("team");
    companyNumberInput.addEventListener("change", function () {
        if (companyNumberInput.value !== "") {
            teamSelect.removeAttribute("disabled");
        } else {
            teamSelect.setAttribute("disabled", "disabled");
        }
    });
};

const companyNumberInput = document.querySelector('input[name="companyNumber"]');
const teamSelect = document.querySelector('#team');

companyNumberInput.addEventListener('input', () => {
    if (companyNumberInput.value.length > 0) {
        teamSelect.disabled = false;
    } else {
        teamSelect.disabled = true;
    }
});
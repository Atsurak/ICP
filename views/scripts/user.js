function addparticipant() {
    let part = document.querySelector('.participants');
    let cnt = document.querySelectorAll('.participant').length;
    let newp = document.createElement('div');
    newp.innerHTML = 
    `
    <div class="input-group row mx-auto mb-3" id=${cnt+1}>
        <div class="form-floating mx-auto col-11 mb-3">
            <select class="form-select participant mb-3" name=${cnt+1} id="${cnt+1}">
                <option selected>Select Candidate</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <label for="${cnt+1}">Select Candidate ${cnt+1}</label>
        </div>
        <div class="col-1 mt-2">
            <button type="button" onclick="removeparticipant(event)" class="btn btn-outline-danger">remove</button>
        </div>
    </div>
    `;
    part.appendChild(newp);
};

function removeparticipant(e){
    e.preventDefault();
    e.target.parentNode.parentNode.remove();
}
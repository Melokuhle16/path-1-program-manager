
let programs = [];


function addProgram(event){

    event.preventDefault();

    const name =
        document.getElementById("programName").value;

    const description =
        document.getElementById("description").value;

    const duration =
        document.getElementById("duration").value;

    const timeSlot =
        document.getElementById("timeSlot").value;

    const channel =
        document.getElementById("channel").value;

    
    const newProgram = {
        id: Date.now(),
        name: name,
        description: description,
        duration: duration,
        timeSlot: timeSlot,
        channel: channel
    };

    
    programs.push(newProgram);

    
    displayPrograms(programs);

    
    document.getElementById("programForm").reset();

    
    document.getElementById("message").textContent =
        "Program added successfully!";
}


function displayPrograms(list){

    const programList =
        document.getElementById("programList");

    
    programList.innerHTML = "";

    
    if(list.length === 0){

        programList.innerHTML =
            "<p>No programs available</p>";

        return;
    }

    
    list.forEach(function(program){

        const card =
            document.createElement("div");

        card.classList.add("program-card");

        card.innerHTML = `

            <h2>${program.name}</h2>

            <p>
                ${program.description}
            </p>

            <p>
                <strong>Duration:</strong>
                ${program.duration} mins
            </p>

            <p>
                <strong>Time:</strong>
                ${program.timeSlot}
            </p>

            <p>
                <strong>Channel:</strong>
                ${program.channel}
            </p>

            <button
                onclick="editProgram(${program.id})"
            >
                Edit
            </button>

            <button
                onclick="deleteProgram(${program.id})"
            >
                Delete
            </button>

        `;

        programList.appendChild(card);

    });

}


function deleteProgram(id){

    programs = programs.filter(function(program){

        return program.id !== id;

    });

    displayPrograms(programs);

}


function editProgram(id){

    const selectedProgram =
        programs.find(function(program){

            return program.id === id;

        });

    
    document.getElementById("programName").value =
        selectedProgram.name;

    document.getElementById("description").value =
        selectedProgram.description;

    document.getElementById("duration").value =
        selectedProgram.duration;

    document.getElementById("timeSlot").value =
        selectedProgram.timeSlot;

    document.getElementById("channel").value =
        selectedProgram.channel;

    
    programs = programs.filter(function(program){

        return program.id !== id;

    });

    displayPrograms(programs);

}


function searchPrograms(){

    const value =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const filteredPrograms =
        programs.filter(function(program){

            return program.name
                .toLowerCase()
                .includes(value);

        });

    displayPrograms(filteredPrograms);

}
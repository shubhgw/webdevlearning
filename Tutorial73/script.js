function addCard(thumbnail, title, cName, views, monthsold, duration) {
  let container = document.getElementById("mainContainer");
  console.log(container);

  let card = document.createElement("div");
  card.className = "vdoCard";
  container.appendChild(card);

  card.style.margin="20px";

  card.style.display = "flex";

  let varThumbnail = document.createElement("img");

  let subDiv = document.createElement("div");
  let varTitle = document.createElement("p");
  let thirdDiv = document.createElement("div");

  let varChannelName = document.createElement("span");
  let varViews = document.createElement("span");
  let varMonthsOld = document.createElement("span");
  let varDuration = document.createElement("span");

  card.appendChild(varThumbnail);
  card.appendChild(subDiv);

  subDiv.appendChild(varTitle);
  subDiv.appendChild(thirdDiv);
  thirdDiv.appendChild(varChannelName);
  thirdDiv.appendChild(varViews);
  thirdDiv.appendChild(varMonthsOld);
  card.appendChild(varDuration);

  subDiv.style.justifyContent = "top";

  varThumbnail.src = thumbnail;
  varThumbnail.width = 150;
  varThumbnail.style.borderRadius = "10px";
  varTitle.textContent = title;
  varChannelName.textContent = cName + " ●";
  varViews.textContent = views + " ●";
  varMonthsOld.textContent = monthsold + " months";
  varDuration.textContent = duration;

  container.style.backgroundColor = "#ebebeb";
  container.style.padding = "10px";
  card.style.columnGap = "10px";
  thirdDiv.style.display = "flex";
  thirdDiv.style.gap = "10px";
  thirdDiv.style.opacity = 0.7;
  card.style.fontFamily = "arial";

  card.style.position = "relative";

  varTitle.style.fontWeight = "bold";

  varDuration.style.position = "absolute";
  varDuration.style.zIndex = 3;
  varDuration.style.color = "#ffffff";
  varDuration.style.backgroundColor = "#020202";
  varDuration.style.padding = "3px";
  varDuration.style.borderRadius = "3px";
  varDuration.style.fontSize = "13px";
  varDuration.style.bottom = "2px";
  varDuration.style.left = "115px";
}

addCard(
  "image.png",
  "East Side Flow | Sidhu Moose Waala | Official Video",
  "SidhuMooseWaala",
  "99B",
  4,
  "2:95",
);
addCard(
  "image.png",
  "East Side Flow | Sidhu Moose Waala | Official Video",
  "SidhuMooseWaala",
  "99B",
  4,
  "2:95",
);
addCard(
  "image.png",
  "East Side Flow | Sidhu Moose Waala | Official Video",
  "SidhuMooseWaala",
  "99B",
  4,
  "2:95",
);

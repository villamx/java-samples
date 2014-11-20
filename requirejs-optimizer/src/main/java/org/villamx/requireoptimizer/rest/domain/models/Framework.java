package org.villamx.requireoptimizer.rest.domain.models;

/**
 * Framework.
 * 
 * @author moises.villa
 * @version 1.0
 * @since 2014-11-18
 */
public class Framework {

	private String name;
	private String license;
	private String version;

	public Framework() {}

	public Framework(String name, String license, String version) {
		this.name = name;
		this.license = license;
		this.version = version;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLicense() {
		return license;
	}

	public void setLicense(String license) {
		this.license = license;
	}

	public String getVersion() {
		return version;
	}

	public void setVersion(String version) {
		this.version = version;
	}

	@Override
	public String toString() {
		StringBuilder info = new StringBuilder();
		info.append("Framework [ name:").append(name).append(" license:").append(license)
				.append(" version:").append(version).append(" ]");
		return info.toString();
	}

}
